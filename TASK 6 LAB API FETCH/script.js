document.addEventListener("DOMContentLoaded", () => {

    const fetchBtn = document.getElementById("fetchBtn");
    const updateBtn = document.getElementById("updateBtn");
    const deleteBtn = document.getElementById("deleteBtn");

    const postCard = document.getElementById("postCard");
    const titleInput = document.getElementById("title");
    const bodyInput = document.getElementById("body");
    const postIdText = document.getElementById("postId");
    const toast = document.getElementById("toast");

    let currentPostId = null;

    // Add base button styles
    document.querySelectorAll(".btn").forEach(btn => {
        btn.classList.add(
            "px-4", "py-2", "text-white",
            "rounded-lg", "hover:scale-105",
            "transition", "duration-200"
        );
    });

    function showToast(message, color = "bg-green-500") {
        toast.textContent = message;
        toast.className =
            `fixed top-5 right-5 px-6 py-3 rounded shadow-lg text-white ${color}`;
        toast.classList.remove("hidden");
        setTimeout(() => toast.classList.add("hidden"), 2500);
    }

    function animateCard(show = true) {
        if (show) {
            postCard.classList.remove("hidden");
            setTimeout(() => {
                postCard.classList.remove("scale-95", "opacity-0");
                postCard.classList.add("scale-100", "opacity-100");
            }, 50);
        } else {
            postCard.classList.add("scale-95", "opacity-0");
            setTimeout(() => postCard.classList.add("hidden"), 300);
        }
    }

    function setLoading(btn, state) {
        btn.disabled = state;
        btn.classList.toggle("opacity-50", state);
    }

    // FETCH
    fetchBtn.addEventListener("click", async () => {
        try {
            setLoading(fetchBtn, true);

            const randomId = Math.floor(Math.random() * 100) + 1;

            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${randomId}`
            );

            if (!res.ok) throw new Error();

            const data = await res.json();

            currentPostId = data.id;
            titleInput.value = data.title;
            bodyInput.value = data.body;
            postIdText.textContent = "Post ID: " + data.id;

            animateCard(true);
            showToast("Post Loaded Successfully 🎉");

        } catch {
            showToast("Failed to fetch post ❌", "bg-red-500");
        } finally {
            setLoading(fetchBtn, false);
        }
    });

    // UPDATE
    updateBtn.addEventListener("click", async () => {
        if (!currentPostId)
            return showToast("Fetch a post first!", "bg-red-500");

        try {
            setLoading(updateBtn, true);

            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${currentPostId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        id: currentPostId,
                        title: titleInput.value,
                        body: bodyInput.value,
                        userId: 1
                    })
                }
            );

            if (!res.ok) throw new Error();

            showToast("Post Updated Successfully ✨");

        } catch {
            showToast("Update Failed ❌", "bg-red-500");
        } finally {
            setLoading(updateBtn, false);
        }
    });

    // DELETE
    deleteBtn.addEventListener("click", async () => {
        if (!currentPostId)
            return showToast("Fetch a post first!", "bg-red-500");

        if (!confirm("Are you sure you want to delete this post?")) return;

        try {
            setLoading(deleteBtn, true);

            await fetch(
                `https://jsonplaceholder.typicode.com/posts/${currentPostId}`,
                { method: "DELETE" }
            );

            animateCard(false);
            currentPostId = null;

            showToast("Post Deleted 🗑", "bg-red-500");

        } catch {
            showToast("Delete Failed ❌", "bg-red-500");
        } finally {
            setLoading(deleteBtn, false);
        }
    });

});