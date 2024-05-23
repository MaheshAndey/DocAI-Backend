const log = [{
    'username': "mahesh@gmail.com",
    'password': "BigBang"
}]

function getLoginDetails(req, res) {
    return res.status(200).json(log);
}

module.exports = {getLoginDetails};


