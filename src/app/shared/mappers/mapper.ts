export abstract class Mapper {
    public abstract toClient(value: any): any;
    public abstract toModel(value: any): any;
}