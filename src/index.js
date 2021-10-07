
		const default25 = document.getElementById("default25")
		const customCd = document.getElementById("customCd")
		const default0 = document.getElementById("default0")
		const customWait = document.getElementById("customWait")
		const start = document.getElementById("start")
		const stop = document.getElementById("stop")
		const cooldown = document.getElementById("cooldown")
		const waitTime = document.getElementById("waitTime")
		const waitDisp = document.getElementById("waitDisp")
		const stackDisp = document.getElementById("stackDisp")
		const timerDisp = document.getElementById("timerDisp")
		
		let timePassed = 1

		start.addEventListener('click', startTimer)

		function startTimer(){
  		default25.disabled=true
  		customCd.disabled=true
  		default0.disabled=true
  		customWait.disabled=true
  		cooldown.disabled=true
  		waitTime.disabled=true
  		let cd = cooldown.value
  		const wait = waitTime.value
    		waitDisp.innerHTML = `${wait} 초 뒤 시작`
    		stackDisp.innerHTML = `0 스택입니다`
        timerDisp.innerHTML = `쿨타임: ${cd}초`
  		let alarm = new Audio('alarm.mp3')
  		if(wait == 0){
    		alarm.play()
  		}
  		let interId = setInterval(function(){
    		let waitCal
    		let stackCal
    		let timerCal

    		if (wait > timePassed){
          waitCal = wait - timePassed
          stackCal = 0
          timerCal = 0
          waitDisp.innerHTML = `${waitCal} 초 뒤 시작`
          timerDisp.innerHTML = `쿨타임: ${cd}초`
    		}else{
          waitCal = 0
          stackCal = ((timePassed - wait) - ((timePassed - wait) % cd)) / cd + 1
          timerCal = -1 * (((timePassed - wait) % cd) - cd)
          waitDisp.innerHTML = `이미 시작했습니다`
          timerDisp.innerHTML = `${timerCal} 초 뒤 다음 스택`
        }
        
    		stackDisp.innerHTML = `${stackCal} 스택입니다`
    		
    		timePassed++
    		if(timerCal == cd){
      		alarm.play()
    		}
    		if(stackCal === 6){
      		reset()
    		}
  		},1000)
  		stop.addEventListener('click',reset)

		function reset(){
  		clearInterval(interId)
    		default25.disabled=false
    		customCd.disabled=false
    		default0.disabled=false
    		customWait.disabled=false
    		if(default25.checked === true){
      		cooldown.disabled=true
    		}else{
      		cooldown.disabled = false
    		}
    		if(default0.checked === true){
      		waitTime.disabled = true
    		}else{
      		waitTime.disabled = false
    		}   
    		timePassed = 1
    		waitDisp.innerHTML = "시작 대기"
    		stackDisp.innerHTML = "0 스택"
    		timerDisp.innerHTML = "다음 스택까지"
		}
		}