<div class="min-h-nav">
    <div class="rounded-md border overflow-hidden bg-white">
        <div class="flex items-center justify-between p-4 border-b">
            <p class="text-xl font-semibold">Listings</p>
            <p class="text-blue-600">See all</p>
        </div>
        <listing-loader v-if="$fetchState.pending" />
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <ul v-else class="divide-y border-b">
            <li v-for="(listing, l) in listings.slice(0, 5)" :key="l">
                <div class="p-4 hover:bg-gray-50 group">
                    <p class="text-gray-800 group-hover:text-blue-600 mb-1">
                        {{ listing.title }}
                    </p>
                    <p class="text-sm text-gray-600">{{ listing.category }}</p>
                </div>
            </li>
        </ul>
        <button class="w-full py-4 text-sm">Create a Listing</button>
    </div>
</div>