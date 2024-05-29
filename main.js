
/*----------------------------------------------------------------*/

        const imageNameInput = document.getElementById('imageName');
        const imageUrlInput = document.getElementById('imageUrl');
        const addImageBtn = document.getElementById('addImageBtn');
        const imageContainer = document.getElementById('imageContainer');

        const apiUrl = 'https://665736849f970b3b36c864e7.mockapi.io/logIn';

        // Function to fetch and display images
        async function fetchAndDisplayImages() {
            const response = await fetch(apiUrl);
            const images = await response.json();
            imageContainer.innerHTML = '';
            images.forEach(image => {
                const imageDiv = document.createElement('div');
                const img = document.createElement('img');
                const name = document.createElement('h4');
                const deleteBtn = document.createElement('button');

                img.src = image.image2;
                name.innerText = `Image Name: ${image.userName}`;
                deleteBtn.innerText = 'Delete';
                deleteBtn.onclick = () => deleteImage(image.id, imageDiv);

                imageDiv.appendChild(name);
                imageDiv.appendChild(img);
                imageDiv.appendChild(deleteBtn);
                imageContainer.appendChild(imageDiv);
            });
        }

        // Function to add a new image
        async function addImage() {
            const newImage = {
                userName: imageNameInput.value,
                image2: imageUrlInput.value
            };
            await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newImage)
            });
            fetchAndDisplayImages();
        }

        // Function to delete an image
        async function deleteImage(id, imageDiv) {
            await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE'
            });
            imageContainer.removeChild(imageDiv);
        }

        // Event listeners
        addImageBtn.addEventListener('click', addImage);

        // Initial fetch and display
        fetchAndDisplayImages();










