function solve(input) {

    var result = input.match(/(?=(.*[0-9])+|(.*[ !\"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])+)(?=(.*[a-z])+)(?=(.*[A-Z])+)[0-9a-zA-Z !\"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]{8,}/gi);
    console.log(JSON.stringify(result));

}
solve('mYPa$$W0rd$');
