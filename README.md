# Wrapper for RoboSats
A simple and private Lightning P2P exchange you can use directly from StartOS.

## Dependencies
- [docker](https://docs.docker.com/get-docker)
- [docker-buildx](https://docs.docker.com/buildx/working-with-buildx/)
- [make](https://www.gnu.org/software/make/)
- [start-sdk](https://github.com/Start9Labs/start-os/tree/master/backend)

## Build enviroment
Prepare your StartOS build enviroment. In this example we are using Ubuntu 20.04.

1. Install docker
  ```
  curl -fsSL https://get.docker.com -o- | bash
  sudo usermod -aG docker "$USER"
  exec sudo su -l $USER
  ```
2. Set buildx as the default builder
  ```
  docker buildx install
  docker buildx create --use
  ```
3. Enable cross-arch emulated builds in docker
```
docker run --privileged --rm linuxkit/binfmt:v0.8
```
4. Install essentials build packages
```
sudo apt-get install -y build-essential openssl libssl-dev libc6-dev clang libclang-dev ca-certificates
```
5. Install Rust
```
curl https://sh.rustup.rs -sSf | sh
# Choose nr 1 (default install)
source $HOME/.cargo/env
```
6. Build and install start-sdk
```
cd ~/ && git clone --recursive https://github.com/Start9Labs/start-os.git
cd start-os/backend/
make sdk
start-sdk init
```
Now you are ready to build your **robosats** service

## Cloning
Clone the project locally. 

```
git clone https://github.com/Start9Labs/robosats-startos.git
cd robosats-wrapper
```

## Building
To build the service, run the following command:

```
make
```

## Installing (on Start9 servers)
Run the following commands to determine successful install:
> :information_source: Change <SERVER-NAME>.local to your Start9 server address

```
start-cli auth login
#Enter your Start9 server master password
start-cli --host https://<SERVER-NAME>.local package install robosats.s9pk
```
**Tip:** You can also install the robosats.s9pk using **Sideload Service** under the **System > Settings** section.
## Verify Install
Go to your Start9 server's Services page, select RoboSats, configure and start the service.

**Done!** 
