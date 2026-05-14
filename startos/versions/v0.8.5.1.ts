import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'

export const v_0_8_5_1 = VersionInfo.of({
  version: '0.8.5:1',
  releaseNotes: {
    en_US: `**Bumps**

- Robosats → 0.8.5-alpha
- start-sdk → 1.5.1

**Features**

- Encrypted image uploads in chat (via coordinator Blossom server)
- Visual warning for orders with bonds below the default 3%
- New payment methods: Doordash USA giftcard, Wero

**Fixes**

- Infinite loading when reloading/renewing orders
- App failed when loading any non-root path
- Crash on mobile when switching Fiat/Swap modes with a payment method selected
- Coordinator rating counts mismatched between list and detail views
- Bond percentage overlapped Premium column on some screen sizes
- Return OK on successful order cancel

**Internal**

- Removed coordinators: Bitcoin Venetto, WhiteEyeSats`,
    es_ES: `**Mejoras**

- Robosats → 0.8.5-alpha
- start-sdk → 1.5.1

**Funcionalidades**

- Subida de imágenes cifradas en el chat (a través del servidor Blossom del coordinador)
- Aviso visual para órdenes con fianzas inferiores al 3% por defecto
- Nuevos métodos de pago: tarjeta regalo Doordash USA, Wero

**Correcciones**

- Carga infinita al recargar/renovar órdenes
- La aplicación fallaba al cargar cualquier ruta distinta de la raíz
- Caída en móvil al cambiar entre Fiat/Swap con un método de pago seleccionado
- Las cuentas de valoración del coordinador no coincidían entre la lista y la vista de detalle
- El porcentaje de fianza se solapaba con la columna Premium en algunos tamaños de pantalla
- Devolver OK al cancelar una orden con éxito

**Interno**

- Coordinadores eliminados: Bitcoin Venetto, WhiteEyeSats`,
    de_DE: `**Updates**

- Robosats → 0.8.5-alpha
- start-sdk → 1.5.1

**Funktionen**

- Verschlüsselte Bild-Uploads im Chat (über den Blossom-Server des Koordinators)
- Visuelle Warnung für Aufträge mit Bonds unter den Standard-3 %
- Neue Zahlungsmethoden: Doordash USA Geschenkkarte, Wero

**Fehlerbehebungen**

- Endloses Laden beim Neuladen/Verlängern von Aufträgen
- App schlug beim Laden eines Nicht-Root-Pfads fehl
- Absturz auf Mobilgeräten beim Wechseln zwischen Fiat/Swap mit ausgewählter Zahlungsmethode
- Bewertungszählungen der Koordinatoren stimmten in Listen- und Detailansicht nicht überein
- Bond-Prozentsatz überlappte bei einigen Bildschirmgrößen die Premium-Spalte
- Erfolgreichen Auftragsabbruch mit OK quittieren

**Intern**

- Entfernte Koordinatoren: Bitcoin Venetto, WhiteEyeSats`,
    pl_PL: `**Aktualizacje**

- Robosats → 0.8.5-alpha
- start-sdk → 1.5.1

**Funkcje**

- Zaszyfrowane przesyłanie obrazów na czacie (przez serwer Blossom koordynatora)
- Wizualne ostrzeżenie o zleceniach z kaucją poniżej domyślnych 3%
- Nowe metody płatności: karta podarunkowa Doordash USA, Wero

**Poprawki**

- Nieskończone ładowanie przy odświeżaniu/odnawianiu zleceń
- Aplikacja zawodziła przy ładowaniu ścieżki innej niż główna
- Awaria na urządzeniach mobilnych przy przełączaniu Fiat/Swap z wybraną metodą płatności
- Liczniki ocen koordynatorów różniły się między widokiem listy i szczegółów
- Procent kaucji nakładał się na kolumnę Premium przy niektórych rozmiarach ekranu
- Zwracanie OK po pomyślnym anulowaniu zlecenia

**Wewnętrzne**

- Usunięci koordynatorzy: Bitcoin Venetto, WhiteEyeSats`,
    fr_FR: `**Mises à jour**

- Robosats → 0.8.5-alpha
- start-sdk → 1.5.1

**Fonctionnalités**

- Envoi d'images chiffrées dans le chat (via le serveur Blossom du coordinateur)
- Avertissement visuel pour les ordres dont la caution est inférieure aux 3 % par défaut
- Nouveaux moyens de paiement : carte cadeau Doordash USA, Wero

**Corrections**

- Chargement infini lors du rechargement/renouvellement des ordres
- L'application échouait au chargement d'un chemin autre que la racine
- Plantage sur mobile lors du basculement Fiat/Swap avec un moyen de paiement sélectionné
- Les compteurs d'avis des coordinateurs différaient entre la liste et la vue détaillée
- Le pourcentage de caution chevauchait la colonne Premium sur certaines tailles d'écran
- Renvoi OK lors d'une annulation d'ordre réussie

**Interne**

- Coordinateurs supprimés : Bitcoin Venetto, WhiteEyeSats`,
  },
  migrations: {
    up: async ({ effects }) => {
      await rm('/media/startos/volumes/main/start9', { recursive: true }).catch(
        console.error,
      )
    },
    down: IMPOSSIBLE,
  },
})
