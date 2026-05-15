import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_8_5_1 = VersionInfo.of({
  version: '0.8.5:1',
  releaseNotes: {
    en_US: `**Bumps**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.1

**Features**

- Encrypted image uploads in chat (via coordinator Blossom server)
- Visual warning for orders with bonds below the default 3%
- New payment methods: Doordash USA giftcard, Wero, SIPAP
- Configurable Nostr host for coordinators

**Fixes**

- Order page no longer hangs when reloading or renewing
- Loading a specific (non-root) path no longer fails
- Fixed mobile crash when switching between Fiat and Swap modes
- Coordinator ratings now consistent between list and detail views
- Bond percentage no longer duplicated across columns on small screens
- Order cancel now returns 200 OK on success

**Internal**

- Removed coordinators: Bitcoin Venetto, WhiteEyeSats`,
    es_ES: `**Actualizaciones**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.1

**Funcionalidades**

- Subida de imágenes cifradas en el chat (vía servidor Blossom del coordinador)
- Aviso visual para órdenes con fianza inferior al 3% por defecto
- Nuevos métodos de pago: tarjeta regalo Doordash USA, Wero, SIPAP
- Host Nostr configurable para coordinadores

**Correcciones**

- La página de orden ya no se queda colgada al recargar o renovar
- Cargar una ruta específica (no raíz) ya no falla
- Solucionado el cuelgue en móvil al alternar entre Fiat y Swap
- Las valoraciones de coordinadores ahora coinciden entre lista y detalle
- El porcentaje de fianza ya no se duplica entre columnas en pantallas pequeñas
- Cancelar orden ahora devuelve 200 OK al tener éxito

**Interno**

- Coordinadores eliminados: Bitcoin Venetto, WhiteEyeSats`,
    de_DE: `**Aktualisierungen**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.1

**Funktionen**

- Verschlüsselter Bild-Upload im Chat (über Blossom-Server des Koordinators)
- Visuelle Warnung für Aufträge mit Sicherheiten unter dem Standard von 3%
- Neue Zahlungsmethoden: Doordash USA-Geschenkkarte, Wero, SIPAP
- Konfigurierbarer Nostr-Host für Koordinatoren

**Fehlerbehebungen**

- Auftragsseite bleibt beim Neuladen oder Erneuern nicht mehr hängen
- Das Laden eines bestimmten (Nicht-Root-)Pfads schlägt nicht mehr fehl
- Absturz auf Mobilgeräten beim Wechsel zwischen Fiat- und Swap-Modus behoben
- Bewertungen der Koordinatoren in Liste und Detailansicht jetzt konsistent
- Sicherheitsprozentsatz wird auf kleinen Bildschirmen nicht mehr doppelt angezeigt
- Auftragsabbruch gibt jetzt bei Erfolg 200 OK zurück

**Intern**

- Entfernte Koordinatoren: Bitcoin Venetto, WhiteEyeSats`,
    pl_PL: `**Aktualizacje**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.1

**Nowości**

- Wysyłanie zaszyfrowanych obrazów w czacie (przez serwer Blossom koordynatora)
- Wizualne ostrzeżenie dla zleceń z kaucją poniżej domyślnych 3%
- Nowe metody płatności: karta podarunkowa Doordash USA, Wero, SIPAP
- Konfigurowalny host Nostr dla koordynatorów

**Poprawki**

- Strona zlecenia nie zacina się już przy przeładowaniu ani odnowieniu
- Wczytanie konkretnej ścieżki (innej niż główna) nie kończy się już błędem
- Naprawiono awarię na urządzeniach mobilnych przy przełączaniu Fiat/Swap
- Oceny koordynatorów są teraz spójne w liście i w widoku szczegółów
- Procent kaucji nie jest już powielany w kolumnach na małych ekranach
- Anulowanie zlecenia zwraca teraz 200 OK po sukcesie

**Wewnętrzne**

- Usunięci koordynatorzy: Bitcoin Venetto, WhiteEyeSats`,
    fr_FR: `**Mises à niveau**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.1

**Nouveautés**

- Téléversement d'images chiffrées dans le chat (via le serveur Blossom du coordinateur)
- Avertissement visuel pour les ordres avec une caution inférieure aux 3% par défaut
- Nouveaux moyens de paiement : carte cadeau Doordash USA, Wero, SIPAP
- Hôte Nostr configurable pour les coordinateurs

**Corrections**

- La page d'ordre ne reste plus bloquée au rechargement ou au renouvellement
- Le chargement d'un chemin spécifique (hors racine) ne plante plus
- Plantage corrigé sur mobile lors du passage entre les modes Fiat et Swap
- Les notes des coordinateurs sont cohérentes entre la liste et le détail
- Le pourcentage de caution n'apparaît plus en double sur les petits écrans
- L'annulation d'un ordre renvoie maintenant 200 OK en cas de succès

**Interne**

- Coordinateurs retirés : Bitcoin Venetto, WhiteEyeSats`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
