import CyroxClient from "../Client";

type Run = (
    client: CyroxClient,
    ...args: any[]
) => any

export default interface IEvent{
    name: string
    once?: boolean,
    run: Run
}