const loadData = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/ai/tools")
    const data = await res.json();
    const allAI = data.data.tools;
    displayAi(allAI)
}

const displayAi = (aiArr) => {
    console.log(aiArr)


    // add now every ai in card
    const aicardContainer = document.getElementById("aicardContainer");

    // feature list index generate
    let i=0;

    aiArr.forEach(ai => {
        console.log(ai)
        const aiSingleCard = document.createElement('div');
        aiSingleCard.classList.add("m-4", "rounded-xl");

        aiSingleCard.innerHTML = `
        <figure><img class="rounded-[12px]" src="${ai?.image || 'https://github.githubassets.com/images/modules/site/social-cards/copilot-ga.png'}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Features</h2>
            <ul>
                <li>${ai.features[0]}</li>
                <li>${ai.features[1]}</li>
                <li>${ai?.features[2] || "Nai Mamma"}</li>

              
            </ul>
        

            <hr class="my-2">
            <div class="flex justify-between">
                <div>
                    <h2 class="text-xl w-7">${ai.name}</h2>
                    <span class="w-7">${ai.published_in}</span>
                </div>
                <div class="card-actions justify-end">
                    <button onclick="handleSingleAi('${ai.id}')" class="btn rounded-full btn-primary">></button>
                </div>
            </div>
        </div>
        `
        aicardContainer.appendChild(aiSingleCard)
    })



}

const handleSingleAi =async (id) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json();
    const details = data.data;
    modalDescription(details)

    // call now modal
    my_modal_4.showModal()
}

const modalDescription = (details) => {
    console.log(details)
    const modalContainer = document.getElementById("my_modal_4");
    modalContainer.innerHTML = `
    <div class="modal-box w-11/12 max-w-5xl">
    <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>


    <div class="flex justify-between gap-4">
        <div>
            <p>${details.description}</p>
            <p>${details.features[1]["feature_name"]}</p>
            <p>${details.features[2]["feature_name"]}</p>
            <p>${details.features[3]["feature_name"]}</p>
            
            <p>${details.integrations[0]}</p>
            <p>${details.integrations[1]}</p>
            <p>${details.integrations[2]}</p>
        </div>
        <div>
            <img class="w-[400px] h-[400px]"
                src="${details["image_link"][0]}"
                alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto facilis et ab culpa
                excepturi, repellat unde amet doloremque impedit?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto facilis et ab culpa
                excepturi, repellat unde amet doloremque impedit?</p>
        </div>
    </div>
</div>
    `
}


loadData()