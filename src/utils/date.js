export const getCurrentDate = () => {
    // 创建一个表示当前时间的 Date 对象
    const currentDate = new Date();

// 获取当前时间是星期几（0 表示星期日，1 表示星期一，以此类推）
    const currentDayOfWeek = currentDate.getDay();

// 将星期几转换为相应的文字表示
    const daysOfWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const currentDayText = daysOfWeek[currentDayOfWeek];

    return currentDayText;
}

export const formatDate = (date) => {
    // 将字符串转换为日期对象
    const dateObject = new Date(date);

    // 获取年、月和日
    const year = dateObject.getFullYear();
    const month = ("0" + (dateObject.getMonth() + 1)).slice(-2); // 加1是因为月份是从0开始计数的，slice(-2)用于保证月份是两位数
    const day = ("0" + dateObject.getDate()).slice(-2); // slice(-2)用于保证日是两位数

// 拼接年、月和日成为指定格式的字符串
    const formattedDate = year + "-" + month + "-" + day;

    return formattedDate;
}