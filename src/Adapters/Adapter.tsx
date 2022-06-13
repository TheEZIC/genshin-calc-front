export default abstract class Adapter<FrontData, CoreData> {
  public abstract toFrontend(coreData: CoreData): FrontData;
  public abstract toCore(frontendData: FrontData): CoreData;
}