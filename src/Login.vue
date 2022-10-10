<template>
    <form>
        <div class="form-group">
            <h5>Vul hier je naam in</h5>
            <input type="text" class="form-control" placeholder="Naam" />
        </div>

        <div class="form-group">
            <h5>Vul hier je kenteken in</h5>
            <input type="text" class="form-control" placeholder="X-999-XX" />
        </div>

        <div class="form-group">
            <h5>Vul hier je email in</h5>
            <input type="email" class="form-control" placeholder="Email" />
        </div>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>
<script>
    export default {
        name: 'LoginScreen'
    }
</script>