describe('triangle', function(){
  it("will prompt user for input if three side lengths are not received", function() {
    expect(triangle('', '', '')).to.equal("Please enter three side lengths");
  });

  it("will determine if the side lengths entered create a valid triangle", function() {
    expect(triangle(2, 2, 8)).to.equal("This is not a valid triangle")
  });

  it("will determine if the side lengths entered create an equilateral triangle", function() {
    expect(triangle(10, 10, 10)).to.equal("Equilateral")
  });

  it("will determine if the side lengths entered create an isosceles triangle", function() {
    expect(triangle(10, 10, 5)).to.equal("Isosceles")
  });

  it("will determine if the side lengths entered create a scalene triangle", function() {
    expect(triangle(28, 18, 39)).to.equal("Scalene")
  });
});
