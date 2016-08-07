
Ball[] balls = new Ball[8];

void setup() {
  size(640,480);
  
  for(int i = 0; i < balls.length; i++) {
    balls[i] = new Ball(int(random(50, 400)), int(random(50, 400)), int(random(5)), int(random(5)), int(random(10, 100)));
  } 
}

void draw() {
  background(255);
  
  for(int i = 0; i < balls.length; i++) {
     balls[i].display();
     balls[i].update();
  }
}

void mousePressed() {
  for(int i = 0; i < balls.length; i++) {
    if(balls[i].pointInEllipse(mouseX, mouseY)){
      balls[i].changeColor();
    }
  }
}

public class Ball {
  
  private int x, y, dy, dx, size;
  private color ballColor = color(255, 0, 0);
  
  public Ball(int x, int y, int dx, int dy, int size) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
  }
  
  public void update() {
    move();
    checkCollisionsWithWalls();
  }
  
  public void move() {
    y += dy;
    x += dx;
  }
  
  public void checkCollisionsWithWalls() {
    if(isCollidingWithVerticalWalls()) {
      setdx(getdx() * -1);
    }
    
    if(isCollidingWithHorizontalWalls()) {
      setdy(getdy() * -1);
    }
  }
  
  public boolean isCollidingWithVerticalWalls() {
    if(getX()+getSize()/2 > width || getX()-getSize()/2 < 0) {
      return true;
    }
    return false;
  }
  
  public boolean isCollidingWithHorizontalWalls() {
    if(getY()+getSize()/2 > height || getY()-getSize()/2 < 0) {
      return true;
    }
    return false;
  }
  
  //We need to be able to change dx and dy
  public void setdy(int dy) {
    this.dy = dy; //this.dy is the class dy, dy is the method dy
  }
  
  public void setdx(int dx) {
    this.dx = dx; 
  }
  
  //We need to be able to see where our ball is
  public int getdy() {
    return this.dy;
  }
  
  public int getdx() {
    return this.dx;
  }

  public int getX() {
    return this.x;
  }
  
  public int getY() {
    return this.y;
  }
  
  public int getSize() {
    return this.size;
  }
  
  public void display() {
    fill(this.ballColor);
    ellipse(x, y, size, size);
  }
  
  public boolean pointInEllipse(int x, int y) {
    double distance = Math.sqrt(Math.pow((x - getX()), 2) + Math.pow((y - getY()), 2));
    if(distance < getSize()/2) {
      return true;
    }
    return false;
  }
  
  public void changeColor() {
    if(red(this.ballColor) == 255) {
      this.ballColor = color(0, 255, 0);
    } else {
      this.ballColor = color(255, 0, 0);
    }
  }
}