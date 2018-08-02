export class Campaign {
  public campaignId: number
  public campaignName: string
  public campaignDescription: string
  public campaignStartDate: Date
  public campaignEndDate: Date
  public campaignImagePath: string
  public campaignStatus: boolean

  constructor(
              id: number,
              name: string,
              description: string,
              imagePath: string,
              status: boolean,
              startDate: Date,
              endDate: Date, ) {
    this.campaignId = id
    this.campaignName = name
    this.campaignDescription = description
    this.campaignStartDate = startDate
    this.campaignEndDate = endDate
    this.campaignImagePath = imagePath
    this.campaignStatus = status
  }
}
