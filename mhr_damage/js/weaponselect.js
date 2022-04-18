window.onload = () =>{
    
    const weapongenreSelect = document.getElementById("weapongenre-select")
    const weaponnameSelect = document.getElementById("weaponname-select")

    const taikenOption = document.querySelectorAll("#taiken-option option")
    const tachiOption = document.querySelectorAll("#tachi-option option")
    const katatekenOption = document.querySelectorAll("#katateken-option option")
    const soukenOption = document.querySelectorAll("#souken-option option")
    const lanceOption = document.querySelectorAll("#lance-option option")
    const gunlanceOption = document.querySelectorAll("#gunlance-option option")
    const hammerOption = document.querySelectorAll("#hammer-option option")
    const syuryoubueOption = document.querySelectorAll("#syuryoubue-option option")
    const slashaxeOption = document.querySelectorAll("#slashaxe-option option")
    const chageaxeOption = document.querySelectorAll("#chageaxe-option option")
    const mushiOption = document.querySelectorAll("#mushi-option option")
    const lightOption = document.querySelectorAll("#light-option option")
    const heavyOption = document.querySelectorAll("#heavy-option option")
    const bowOption = document.querySelectorAll("#bow-option option")

    const option ={
        "taiken": taikenOption,
        "tachi": tachiOption,
        "katateken": katatekenOption,
        "souken": soukenOption,
        "lance": lanceOption,
        "gunlance": gunlanceOption,
        "hammer": hammerOption,
        "syuryoubue": syuryoubueOption,
        "slashaxe": slashaxeOption,
        "chageaxe": chageaxeOption,
        "mushi": mushiOption,
        "light": lightOption,
        "heavy": heavyOption,
        "bow": bowOption
    }
    
    const appendChildren = (parent, children) => {
        children.forEach(child => {
            parent.appendChildren(child)        
        })
    }

    weapongenreSelect.onchange =() =>{
        const currentValue = weapongenreSelect.value
        console.log(`${currentValue}is selected!`)
        // 前回設定された武器ジャンルのIDを取得
        const prevOptionId = weaponnameSelect.getAttribute("data-option-id")

        // prevOptionIdが取得出来たら、前回のオプションをhiddenのところに戻す
        if(prevOptionId){
            const hiddenOption = document.getElementById(`${prevOptionId}-option`)

            appendChildren(hiddenOption, option[prevOptionId])
        }
        // 今回変更されたオプションのIDを設定
        weaponnameSelect.setAttribute("data-option-id" , currentValue)

        // option を戻す
        appendChildren(weaponnameSelect, option[currentValue])
    }

    weaponnameSelect.onchange =() =>{
        console.log(weaponnameSelect.value)
    }
    console.log(weapongenreSelect)

}

