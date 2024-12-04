import { subDays, format } from "date-fns";

const date = new Date(1997, 10, 13) // 0 = enero, 1 = febrero

const rta = subDays(date, 30)
const str = format(rta, 'yyyy/MM/dd')

console.log(str);
