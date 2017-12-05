		var link = document.querySelector(".feedback_opener");
		var popup = document.querySelector(".feedback_form");
		var overlay = document.querySelector(".feedback_overlay");
		var close = popup.querySelector(".feedback_close");
		var username = popup.querySelector("[name=feedback_name]");
		var email = popup.querySelector("[name=feedback_email]");
		var comment = popup.querySelector("[name=feedback_comment]");
		var storage_username = localStorage.getItem("username");
		var storage_email = localStorage.getItem("email");
		link.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.add("feedback_show");
			overlay.classList.add("feedback_overlay_show")
			if (storage_username && storage_email) {
				username.value = storage_username;
				email.value = storage_email;
				comment.focus();
			} else {
				username.focus();
			}
		});
		close.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.remove("feedback_show");
			popup.classList.remove("feedback_error");
			overlay.classList.remove("feedback_overlay_show")
		});
		popup.addEventListener("submit", function (evt) {
			if (!username.value || !email.value  || !comment.value) {
				evt.preventDefault();
				popup.classList.remove("feedback_error");
				popup.offsetWidth = popup.offsetWidth;
				popup.classList.add("feedback_error");
			} else {
				localStorage.setItem("username", username.value);
				localStorage.setItem("email", email.value)
			}
		});

		window.addEventListener("keydown", function (evt) {
			if (evt.keyCode === 27) {
				if (popup.classList.contains("feedback_show")) {
					popup.classList.remove("feedback_show");
					popup.classList.remove("feedback_error");
					overlay.classList.remove("feedback_overlay_show")
				}
			}
		});