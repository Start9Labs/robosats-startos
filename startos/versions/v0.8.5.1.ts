import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_8_5_1 = VersionInfo.of({
  version: '0.8.5:1',
  releaseNotes: {
    en_US: `**Bumps**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0

**Features (upstream)**

- Encrypted image uploads in chat via coordinator Blossom server
- Visual warning for orders with bonds below 3%
- New payment methods: DoorDash USA giftcard, Wero
- Configurable nostr host (coordinators)

**Fixes (upstream)**

- Recover from infinite loading when reloading/renewing orders
- Loading non-root paths no longer crashes the app
- Mobile crash when switching Fiat/Swap with a payment method selected
- Coordinator rating counts now agree between list and detail views
- Bond percentage no longer overlaps Bond/Premium columns on small screens
- Successful order cancel returns 200 OK

**Note**

- Upstream removed the Bitcoin Venetto and WhiteEyeSats coordinators.`,
    es_ES: `**Cambios de versión**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0

**Funciones (upstream)**

- Subida de imágenes cifradas en el chat mediante el servidor Blossom del coordinador
- Aviso visual para órdenes con fianzas por debajo del 3%
- Nuevos métodos de pago: tarjeta regalo DoorDash USA, Wero
- Host de nostr configurable (coordinadores)

**Correcciones (upstream)**

- Se recupera de la carga infinita al recargar/renovar órdenes
- Cargar rutas distintas a la raíz ya no bloquea la aplicación
- Corregido el cierre inesperado en móviles al alternar Fiat/Swap con un método de pago seleccionado
- Los recuentos de valoraciones de coordinadores coinciden entre la lista y el detalle
- El porcentaje de fianza ya no se superpone entre las columnas Fianza y Premium en pantallas pequeñas
- La cancelación de orden con éxito devuelve 200 OK

**Nota**

- Upstream ha eliminado los coordinadores Bitcoin Venetto y WhiteEyeSats.`,
    de_DE: `**Versionserhöhungen**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0

**Funktionen (Upstream)**

- Verschlüsselte Bilduploads im Chat über den Blossom-Server des Koordinators
- Visuelle Warnung für Aufträge mit Sicherheiten unter 3%
- Neue Zahlungsmethoden: DoorDash USA Geschenkkarte, Wero
- Konfigurierbarer Nostr-Host (Koordinatoren)

**Behoben (Upstream)**

- Endlos-Ladeproblem beim Neuladen/Erneuern von Aufträgen wird nun aufgefangen
- Das Laden von Nicht-Root-Pfaden lässt die App nicht mehr abstürzen
- Mobiler Absturz beim Wechsel zwischen Fiat/Swap mit ausgewählter Zahlungsmethode behoben
- Die Anzahl der Koordinatorbewertungen stimmt jetzt zwischen Listen- und Detailansicht überein
- Der Sicherheitenprozentsatz überlappt auf kleinen Bildschirmen nicht mehr die Spalten Sicherheit und Premium
- Erfolgreiche Auftragsstornierung gibt 200 OK zurück

**Hinweis**

- Upstream hat die Koordinatoren Bitcoin Venetto und WhiteEyeSats entfernt.`,
    pl_PL: `**Aktualizacje wersji**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0

**Funkcje (upstream)**

- Wysyłanie zaszyfrowanych obrazów na czacie przez serwer Blossom koordynatora
- Wizualne ostrzeżenie dla zleceń z depozytem poniżej 3%
- Nowe metody płatności: karta podarunkowa DoorDash USA, Wero
- Konfigurowalny host nostr (koordynatorzy)

**Poprawki (upstream)**

- Aplikacja wychodzi z nieskończonego ładowania przy przeładowywaniu/odnawianiu zleceń
- Ładowanie ścieżek innych niż główna nie powoduje już awarii aplikacji
- Naprawiono awarię na urządzeniach mobilnych przy przełączaniu Fiat/Swap z wybraną metodą płatności
- Liczba ocen koordynatorów zgadza się między listą a szczegółami
- Procent depozytu nie nakłada się już na kolumny Depozyt i Premia na małych ekranach
- Pomyślne anulowanie zlecenia zwraca 200 OK

**Uwaga**

- Upstream usunął koordynatorów Bitcoin Venetto i WhiteEyeSats.`,
    fr_FR: `**Mises à jour de version**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0

**Fonctionnalités (upstream)**

- Envoi d'images chiffrées dans le chat via le serveur Blossom du coordinateur
- Avertissement visuel pour les ordres avec cautions inférieures à 3 %
- Nouveaux moyens de paiement : carte cadeau DoorDash USA, Wero
- Hôte nostr configurable (coordinateurs)

**Corrections (upstream)**

- L'application sort désormais du chargement infini lors du rechargement/renouvellement des ordres
- Le chargement de chemins autres que la racine ne fait plus planter l'application
- Correction du crash mobile lors du passage Fiat/Swap avec un moyen de paiement sélectionné
- Le nombre d'évaluations des coordinateurs concorde entre la liste et le détail
- Le pourcentage de caution ne chevauche plus les colonnes Caution et Premium sur petits écrans
- L'annulation d'ordre réussie renvoie 200 OK

**Note**

- Upstream a supprimé les coordinateurs Bitcoin Venetto et WhiteEyeSats.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
