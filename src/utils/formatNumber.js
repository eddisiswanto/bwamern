export default number => {
    const formatNumbering = new Intl.NumberFormat("en-ID");
    return formatNumbering.format(number);
}