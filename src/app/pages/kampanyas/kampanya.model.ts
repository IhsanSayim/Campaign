export class Kampanya {
  public name: string
  public description: string
  public imagePath: string
  public active: boolean

  constructor(name: string, description: string, imagePath: string, active: boolean) {
    this.name = name
    this.description = description
    this.imagePath = imagePath
    this.active = active
  }
}
