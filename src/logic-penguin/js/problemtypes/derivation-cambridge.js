// LICENSE: GNU GPL v3 You should have received a copy of the GNU General
// Public License along with this program. If not, see
// https://www.gnu.org/licenses/.

///////////////// derivation-cambridge.js /////////////////////////////////////
// Fitch-style derivations using the cambridge rule set                      //
///////////////////////////////////////////////////////////////////////////////

import DerivationFitch from './derivation-fitch-base.js';

export default class DerivationCambridge extends DerivationFitch {

    constructor() {
        super();
    }

    getAnswer() {
        return super.getAnswer();
    }

    getSolution() {
        return super.getSolution();
    }

    makeProblem(problem, options, checksave) {
        // always use Cambridge ruleset
        options.ruleset = 'cambridge';
        // default to Cambridge notation
        if (!("notation" in options)) {
            options.notation = 'cambridge';
        }
        // default to rules first
        if (!("rulesFirst" in options)) {
            options.rulesFirst = true;
        }
        super.makeProblem(problem, options, checksave);
    }

}

customElements.define("derivation-cambridge", DerivationCambridge);
