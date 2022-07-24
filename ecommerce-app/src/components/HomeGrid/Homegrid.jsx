import React from "react";
import "./style.scss";

export default function HomeGrid() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div class="reveal row">
	<div class="gridContainer">
		<div class="test_box box-01 col-xs-6 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Shop</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>
		<div class="test_box box-02 col-xs-6 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Contact Us</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>
		<div class="test_box box-03 col-xs-6 col-md-4">
			<div class="inner">
				<a href="#" class="test_click">
					<div class="flex_this">
						<h1 class="test_title">Who We Are</h1>
						<span class="test_link">Link</span>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
  );
}
