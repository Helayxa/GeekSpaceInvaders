class Ship extends Sprite {
  static PIXEL_BY_SHIP_MOVE = 5;

  constructor(imageFile, left, top) {
    super(imageFile, left, top);
  }

  moveLeft() {
    return super.moveLeft(Ship.PIXEL_BY_SHIP_MOVE);
  }

  moveRight() {
    return super.moveRight(Ship.PIXEL_BY_SHIP_MOVE);
  }

  /**
   * When the ship is touched by an alien, fake the explosion by
   * changing its image.
   */
  explode() {
    this._node.src = this.generateFullImagePath("ship_exploded");
  }
}
