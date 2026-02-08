# Spikonado Website

## Running Locally

### Nix

Install Nix: https://nixos.org/nix/download.html

#### 1. Clone the repository

```bash
git clone https://github.com/spikonado/website ~/spikonado/website/
```

#### 2. Activate the nix environment

```bash
cd ~/spikonado/website/
nix develop
```

#### 3. Start the website

```bash
cd ~/spikonado/website/
pnpm i
pnpm dev
```
