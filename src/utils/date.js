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