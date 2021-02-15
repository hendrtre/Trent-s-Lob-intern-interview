const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  lockState.wheels[index] = lockState.wheels[index] + incrementBy  
  if (lockState.wheels.every((v, i) => v === SECRET_COMBO[i])) {
    lockState.locked = false
    console.log(lockState.wheels)
    redirect('Trent-Hendrickson')
  } 
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
