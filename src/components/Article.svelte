<script>
    import ArticleTopNav from "./ArticleTopNav.svelte";
</script>

<div class="w-7/12">

    <ArticleTopNav />

    <div>

        <div class="border rounded shadow bg-white mt-2">

            <div class="flex">

                <div class="ml-local-10 mt-2">
                    <p class="rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-offset-white focus:ring-blue-800 focus:outline-none">
                        <img src="/images/profile_default.png" class="h-8 w-8" alt="Profile" />
                    </p>
                </div>

                <div class="ml-local-10">

                    <div class="mt-2"> <small> Author Name </small> </div>

                    <div> <small> Date </small> </div>

                    <div class="text-2xl mt-2"> Topic Intro </div>

                    <!-- Associated Tags -->
                    <div class="flex mt-2">

                        <div class="mb-6 text-gray-500 hover:bg-blue-100 hover:rounded">
                            <div class="py-2 px-2 rounded-md border underline">
                                <small>javascript</small>
                            </div>
                        </div>

                        <div class="ml-2 mb-6 text-gray-500 hover:bg-blue-100 hover:rounded">
                            <div class="py-2 px-2 rounded-md border underline">
                                <small>beginners</small>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>


    </div>

</div>