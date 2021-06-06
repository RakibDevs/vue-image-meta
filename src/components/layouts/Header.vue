<template>
    
    <nav class="navbar navbar-expand">
        <div class="d-flex container justify-content-left pl-4 pr-4">
            <router-link to="/" class="navbar-brand">
                Image Meta
            </router-link>
            <div class="navbar-nav">
                <li class="nav-item" >
                    <router-link  to="" class="nav-link">
                        
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link  to="/images" class="nav-link">
                        Images 
                    </router-link>
                </li>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Header"
};
</script>
