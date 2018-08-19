pragma solidity ^0.4.24;

library SafeMath {
    function add(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function sub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
    function mul(uint a, uint b) internal pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
    function div(uint a, uint b) internal pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}

contract EtherSugar {
    using SafeMath for uint;

    address owner;
    address host;

    event Deposit(uint amount);
    event Payment(address indexed viewer, uint amount);

    mapping(address => uint) viewers;

    uint deposit;
    uint minDeposit;
    uint price;
    uint duration; // (minute)
    uint start_unix;
    uint end_unix;

    uint collection;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    constructor(address _host, uint _minDeposit, uint _price, uint _duration) public {
        owner      = msg.sender;
        host       = _host;
        price      = _price;
        minDeposit = _minDeposit;
        duration   = _duration;
        start_unix = now;
        end_unix   = now + _duration.mul(60);
    }

    function pricing() public constant returns (uint) {
        return price;
    }

    function minimumDeposit() public constant returns (uint) {
        return minDeposit;
    }

    function totalDeposit() public constant returns (uint) {
        return deposit;
    }

    function closeSession() public onlyOwner returns (bool) {
        uint hostAmt = collection.mul(9).div(10); // 90% to host
        hostAmt      = hostAmt.add(deposit); // include deposit
        host.transfer(hostAmt);
        selfdestruct(owner);

        return true;
    }

    function payDeposit() public payable returns (bool) {
        uint total = msg.value.add(deposit);

        require(msg.sender == host);
        require(total >= minDeposit);

        deposit = deposit.add(msg.value);
        emit Deposit(msg.value);

        return true;
    }

    function getPeriod() public constant returns (uint, uint) {
        return (start_unix, end_unix);
    }

    function getCollection() public constant returns (uint) {
        return collection;
    }

    function getIsPay(address _addr) public constant returns (bool) {
        if(viewers[_addr] > 0 && viewers[_addr] > price) {
            return true;
        }else{
            return false;
        }
    }

    function getHost(address _addr) public constant returns (bool) {
        if(host == _addr){
            return true;
        }else{
            return false;
        }
    }

    function () public payable {
        require(msg.value >= price);
        require(deposit > 0);

        viewers[msg.sender] = viewers[msg.sender].add(msg.value);
        collection          = collection.add(msg.value);

        emit Payment(msg.sender, msg.value);
    }
}
