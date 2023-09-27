<script>
    import desktopSidebar from "$lib/images/bg-sidebar-desktop.svg";
    import mobileSidebar from "$lib/images/bg-sidebar-mobile.svg";
</script>
<div class="grid grid-cols-1 place-items-center h-screen bg-magnolia justify-center items-center">
    <div class="w-3/5 aspect-video rounded-3xl bg-alabaster drop-shadow-2xl shadow-cool-gray">
        <picture>
            <source class="sm" srcset={mobileSidebar} />
            <source class="lg" srcset={desktopSidebar} />
            <img src={desktopSidebar} alt="desktop sidebar"/>
            </picture>
        </div>
</div>

