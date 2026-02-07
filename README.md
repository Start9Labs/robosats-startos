<p align="center">
  <img src="icon.png" alt="Project Logo" width="21%">
</p>

# RoboSats for StartOS

This repository packages [RoboSats](https://github.com/Reckless-Satoshi/robosats) for StartOS. This document describes what makes this package different from a default RoboSats deployment.

For general RoboSats usage and features, see the [upstream documentation](https://learn.robosats.com/).

## How This Differs from Upstream

This package runs the RoboSats **self-hosted client**, not a coordinator. The client connects to RoboSats coordinators over Tor to facilitate P2P Bitcoin trades. All traffic is routed through StartOS's Tor proxy for privacy.

## Container Runtime

This package runs **1 container**:

| Container | Image | Purpose |
|-----------|-------|---------|
| robosats | `recksato/robosats-client:v0.8.4-alpha` | Self-hosted web client |

## Volumes

| Volume | Contents | Backed Up |
|--------|----------|-----------|
| `main` | Client data, robot tokens | Yes |

Mounted at `/root` inside the container.

## Configuration Management

### Auto-Configured Settings

| Setting | Value | Purpose |
|---------|-------|---------|
| `TOR_PROXY_IP` | `startos` | StartOS Tor SOCKS proxy |
| `TOR_PROXY_PORT` | `9050` | Tor proxy port |

### User-Configurable Settings

All configuration is done through the RoboSats web interface:
- Robot identity generation
- Order creation and management
- Coordinator selection

## Network Interfaces

| Interface | Type | Port | Description |
|-----------|------|------|-------------|
| Web UI | ui | 12596 | RoboSats client interface |

## Actions

None. All interaction is through the web interface.

## Dependencies

None. The client connects to external RoboSats coordinators over Tor.

## Backups

All data is backed up:
- `main` volume - robot tokens and client state

**Important:** Your robot token is your identity. Back it up to recover active orders.

## Health Checks

| Check | Method | Success Condition |
|-------|--------|-------------------|
| Web Interface | HTTP check | `/selfhosted` endpoint responds |

## How RoboSats Works

1. **Generate Robot**: Create a disposable robot identity (no KYC)
2. **Create/Take Order**: Make or accept a buy/sell order for Bitcoin
3. **Lightning Escrow**: Funds held in Lightning hodl invoices during trade
4. **Fiat Exchange**: Complete fiat payment outside RoboSats
5. **Settlement**: Lightning payment released upon confirmation

All coordinator communication happens over Tor for privacy.

## Limitations

1. **Client only**: This is the web client, not a coordinator; you connect to external coordinators
2. **Requires Lightning wallet**: Need an external Lightning wallet to send/receive payments
3. **Tor latency**: All traffic routed through Tor may be slower than clearnet
4. **Coordinator trust**: Must trust coordinators for escrow; client doesn't run its own

## What's Unchanged

- Full RoboSats client functionality
- Robot identity system
- Order book access
- Lightning escrow trades
- Multi-coordinator support
- Privacy features (Tor-only, no KYC)

---

## Quick Reference (YAML)

```yaml
package_id: robosats
upstream_version: 0.8.4-alpha
containers:
  - name: robosats
    image: recksato/robosats-client:v0.8.4-alpha

volumes:
  main:
    backup: true
    mountpoint: /root

interfaces:
  ui:
    type: ui
    port: 12596

actions: []

dependencies: []

auto_configure:
  - TOR_PROXY_IP: startos
  - TOR_PROXY_PORT: 9050

health_checks:
  - name: Web Interface
    method: http_check
    url: http://robosats.startos:12596/selfhosted

not_available:
  - coordinator_functionality
  - built_in_lightning_wallet
```
