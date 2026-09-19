(function() {
    "use strict";

    const revealItems = document.querySelectorAll(".cs-reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
        revealItems.forEach(function(item) {
            item.classList.add("is-visible");
        });
    } else {
        const observer = new IntersectionObserver(function(entries, obs) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.14, rootMargin: "0px 0px -45px" });

        revealItems.forEach(function(item) {
            observer.observe(item);
        });
    }

    const metrics = document.querySelectorAll("[data-count]");

    function animateMetric(metric) {
        const target = Number(metric.dataset.count);
        if (!Number.isFinite(target) || reduceMotion) return;

        const duration = 900;
        const start = performance.now();

        function frame(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            metric.textContent = Math.round(target * eased);
            if (progress < 1) window.requestAnimationFrame(frame);
        }

        metric.textContent = "0";
        window.requestAnimationFrame(frame);
    }

    if (metrics.length && "IntersectionObserver" in window && !reduceMotion) {
        const metricObserver = new IntersectionObserver(function(entries, obs) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting) return;
                animateMetric(entry.target);
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.5 });
        metrics.forEach(function(metric) { metricObserver.observe(metric); });
    }

    const orbit = document.querySelector(".cs-system-orbit");
    if (orbit && !reduceMotion) {
        orbit.addEventListener("pointermove", function(event) {
            const rect = orbit.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            orbit.style.transform = `rotate(${x * 12}deg) translate(${x * 8}px, ${y * 8}px)`;
        });
        orbit.addEventListener("pointerleave", function() {
            orbit.style.transform = "";
        });
    }
})();