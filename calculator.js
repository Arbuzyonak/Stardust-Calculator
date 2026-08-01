const button = document.querySelector("#calc")
const button2 = document.querySelector("#calc2")
const button3 = document.querySelector("#calc3")
const hours = document.querySelector("#hours")
const multiplier = document.querySelector("#multiplier")
const multiplier_2 = document.querySelector("#multiplier_2")
const multiplier_3 = document.querySelector("#multiplier_3")
const result = document.querySelector("#result")
const result2 = document.querySelector("#result2")
const result3 = document.querySelector("#result3")

const current_stardust = document.querySelector("#current_stardust")
const stardust_required = document.querySelector("#stardust_required")
const hours_per_day = document.querySelector("#hours_per_day")

function calculate_stardust(){
    const hours_value = hours.value
    const multiplier_value = multiplier.value

    const result_value = hours_value * multiplier_value

    result.textContent = "You'll earn " + "~" + result_value + " Stardust"
}

function hours_to_goal() {
    const current_stardust_value = current_stardust.value
    const stardust_required_value = stardust_required.value
    const hours_per_day_value = hours_per_day.value
    const multiplier_value = multiplier_3.value

    const stardust_left = stardust_required_value - current_stardust_value
    const days_required = hours_per_day_value * multiplier_value
    const result_value = Math.ceil(stardust_left / days_required * 24);

    if (!Number.isFinite(result_value)) {
        result3.textContent = "You cannot multiply by 0"
        return;
    }

    result3.textContent = "You'll need about " + result_value + " hours to achieve your stardust goal!"
}

function days_to_goal(){
    const current_stardust_value = current_stardust.value
    const stardust_required_value = stardust_required.value
    const hours_per_day_value = hours_per_day.value
    const multiplier_value = multiplier_2.value

    const stardust_left = stardust_required_value - current_stardust_value
    const days_required = hours_per_day_value * multiplier_value
    const result_value = Math.ceil(stardust_left / days_required);

    if (!Number.isFinite(result_value)) {
        result2.textContent = "You cannot multiply by 0"
        return;
    }

    result2.textContent = "You'll need about " + result_value + " days to achieve your stardust goal!"
}

button.addEventListener("click", calculate_stardust)
button2.addEventListener("click", days_to_goal)
button3.addEventListener("click", hours_to_goal)