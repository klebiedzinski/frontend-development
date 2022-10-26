export const now_string = () => {
    const now = new Date()
    const nowyear = now.getFullYear().toString();
    const nowmonth = Number(now.getMonth()+1).toString();
    const nowday = now.getDate().toString();
    const nowDate = nowyear.concat('-',nowmonth).concat('-',nowday);
    return nowDate;
}
export const is_today_or_later = (date,now) => {
    return new Date(date)>=new Date(now);
}