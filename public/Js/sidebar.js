<script>
function toggleMenu(){
document.getElementById('sidebar').classList.toggle('active');
document.getElementById('overlay').classList.toggle('active');
}
function updateClock(){
document.getElementById('clock').innerText=new Date().toLocaleString('id-ID');
}
setInterval(updateClock,1000);updateClock();
</script>

