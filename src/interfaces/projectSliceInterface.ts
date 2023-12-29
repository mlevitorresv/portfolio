import { ProjectInterface } from "./componentsInterface"

export interface ProjectSliceInterface {
    data: ProjectInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined
}