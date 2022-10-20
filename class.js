

/* 1) Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area
of a Square object. */

class rect 
{
    constructor(length,bredth)
    {
        this.length=length;
        this.bredth=bredth;
    }
    area()
    {
          console.log(`Area of Rectangle is ${this.length*this.bredth}`);
    }
}


class Square extends rect
{
  constructor(length)
  {
      super(length);
      this.length=length;
  }
area()
{
    console.log(`Area of Square is  ${this.length*this.length} `);
}

}

let r1=new rect(8,9);
r1.area();
let s2=new Square(10);
s2.area();