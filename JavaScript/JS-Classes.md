# JavaScript Classes

Example (try at https://www.w3schools.com/js/tryit.asp?filename=tryjs_classes_method2)

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Method</h2>

<p>Pass a parameter into the "present()" method.</p>

<p id="demo"></p>

<script>
class Car {
  constructor(brand,model) {
    this.carname = brand;
    this.carmodel = model;
  }
  present(x) {
    return x + ", I have a " + this.carname+" @ "+this.carmodel;
  }
}

mycar = new Car("Ford","Fuse");

document.getElementById("demo").innerHTML = mycar.present("Hello");
</script>

</body>
</html>
```

Output
```
JavaScript Class Method
Pass a parameter into the "present()" method.

Hello, I have a Ford @ Fuse

```