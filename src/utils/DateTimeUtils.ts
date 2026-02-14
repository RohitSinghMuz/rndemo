  
 import moment from 'moment';
 export enum DATA_TYPE{
    OBJECT='object',
    STRING='string',
 }
 export const parseDateToMoment=(inputDate:string|Date,
    format:string='YYYY-MM-DD',
):moment.Moment=>{
    return typeof inputDate===DATA_TYPE.STRING?moment.utc(inputDate,format):moment.utc(inputDate)
}
 
 
 export const parseScheduleDate = (dateStr: string): Date => {
    const [dayStr, monthStr, yearStr] = dateStr.split('/');
    const day = parseInt(dayStr, 10);
    const month = parseInt(monthStr, 10) - 1;
    const year = parseInt(yearStr, 10) + 2000;
  
    return new Date(Date.UTC(year, month, day));
  };
  
  export const getFutureDate = (
    inputDate: string | Date,
    years: number = 0,
    format: string = 'YYYY-MM-DD',
    returnFormat?: string
  ): string => {
    if (!inputDate) return '';
  
    const dateValue = parseDateToMoment(inputDate, format);
    return dateValue
      .add(years, 'years')
      .format(returnFormat ? returnFormat : format);
  };
  