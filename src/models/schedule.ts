export const SCHEDULES_KEY = "schedules";


export interface Schedule {
    id: string;
    nameClient: string;
    dateSchedule: string;
    timeSchedule: string;
    periodSchedule?: string;
    state: 'created';
}