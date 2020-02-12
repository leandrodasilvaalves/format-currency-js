function formatCurreny(value, sign) {
    sign = sign || '';
    value = value.replace(/[^\d]+/g, '');

    if (value.length === 1) return `${sign}0,0${value}`;
    if (value.length === 2) return `${sign}0,${value}`;

    if (value.length >= 3) {

        let decimal = value.substring(value.length - 2, value.length);
        let integer = value.substring(0, value.length - 2).replace(/[.]/g, ',')
        integer = parseInt(integer)
            .toString()
            .replace(/\d(?=(?:\d{3})+(?:\D|$))/g, '$&.');

        return `${sign}${integer},${decimal}`;
    }
}