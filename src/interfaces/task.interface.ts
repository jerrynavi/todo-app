export interface Task {
    id: string;
    title: string;
    steps?: Task[];
}