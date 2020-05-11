import { customElement, TemplateResult, html } from "lit-element";
import { HacsRepositoryButton } from "./HacsRepositoryButton";
import { localize } from "../../../localize/localize";

@customElement("hacs-button-open-repository")
export class HacsButtonOpenRepository extends HacsRepositoryButton {
  protected render(): TemplateResult | void {
    return html`
      <a
        href="https://github.com/${this.repository.full_name}"
        rel="noreferrer"
        target="_blank"
      >
        <mwc-button>
          ${localize(`repository.repository`)}
        </mwc-button>
      </a>
    `;
  }
}
