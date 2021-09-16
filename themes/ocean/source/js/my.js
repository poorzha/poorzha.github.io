<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			{
	
				position: absolute;

			}
		</style>
		<script>
			var rotateVal = 0 // 旋转角度
			var InterVal // 定时器
			window.onload = function () 
			{
				// 网页加载完成后即运行rotate函数
				rotate()
				// 鼠标悬浮在图片上时，停止旋转，即清除定时器
				document.getElementById('img').onmousemove = function () {
					clearInterval(InterVal)
				}
				// 鼠标离开图片时，继续旋转，即继续运行定时器
				document.getElementById('img').onmouseleave = function () {
					rotate()
				}
			}
			
			// 设置定时器
			function rotate () {
				InterVal = setInterval(function () {
					var img = document.getElementById('img')
					rotateVal += 1
					// 设置旋转属性(顺时针)
					img.style.transform = 'rotate(' + rotateVal + 'deg)'
					// 设置旋转属性(逆时针)
					//img.style.transform = 'rotate(-' + rotateVal + 'deg)'
					// 设置旋转时的动画  匀速0.1s
					img.style.transition = '0.1s linear'
				}, 100)
			}
		</script>
	</head>
	<body>
 	<img id="im3" src="/images/zha.jpg" width="90px" height="90px" />
	</body>
</html>