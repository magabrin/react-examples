

## deployment commands from inside the vm instance

sudo docker pull artifactory-pit.mmodal-npd.com/mmodal/closed-loop-website:0.1.4

sudo docker stop <oldcontainerid>

sudo docker run -p 7000:7000 -d --name closed-loop-website artifactory-pit.mmodal-npd.com/mmodal/closed-loop-website:0.1.4

