<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>

<p id="intro">Hello World!</p>

<script>
  let ps = document.querySelectorAll('p')
  Array.from(ps).forEach(function (p) {
    console.log(p)
  })
</script>

</body>
</html>
