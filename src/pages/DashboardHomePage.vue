<template>
    <div>
        <h2>Welcome to Dashboard</h2>

        <h5 class="mt-5">Guideline</h5>
        <ul>
            <li>You can see list of person profile that you already create</li>
            <li>You can add, edit, show, and delete a person profile</li>
        </ul>

        <b-button variant="outline-primary" class="mt-4" :to="{ name: 'list-person-profile' }">Start Here</b-button>
    </div>
</template>
