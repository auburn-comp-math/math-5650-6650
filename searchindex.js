Search.setIndex({"docnames": ["AugmentLagrange", "ConjugateGradient", "EvolutionAlgorithm", "ExtendedTopics", "LeastSquares", "LineSearch", "Projects", "Proximal", "QuadraticProgramming", "QuasiNewton", "README", "Subgradient", "TrustRegion", "intro"], "filenames": ["AugmentLagrange.md", "ConjugateGradient.md", "EvolutionAlgorithm.md", "ExtendedTopics.md", "LeastSquares.md", "LineSearch.ipynb", "Projects.md", "Proximal.md", "QuadraticProgramming.md", "QuasiNewton.md", "README.md", "Subgradient.md", "TrustRegion.md", "intro.md"], "titles": ["Augmented Lagrangian Methods (Week 8 - 9)", "Conjugate Gradient Methods (Week 3)", "Evolution Algorithms (Week 10)", "Extended Topics (Week 13)", "Least Squares Problems (Week 5)", "Line Search Methods (Week 1)", "Final Group Project Presentation (Week 14)", "Mirror Descent and Proximal Methods (Week 12)", "Quadratic Programming (Week 6 - 7)", "Quasi-Newton Methods (Week 4)", "Welcome! \ud83d\udc4b", "Subgradient Methods (Week 11)", "Trust Region Method (Week 2)", "Before you start"], "terms": {"each": 5, "iter": 5, "requir": 5, "alpha_k": 5, "direct": [5, 10], "p_k": 5, "comput": [5, 10], "updat": 5, "x_": 5, "k": 5, "x_k": 5, "onc": 5, "reduc": 5, "object": 5, "function": 5, "f": 5, "usual": 5, "should": 5, "compromis": 5, "between": 5, "reduct": 5, "cost": 5, "ideal": 5, "best": 5, "choic": 5, "so": 5, "call": 5, "exact": 5, "which": 5, "find": 5, "optim": [5, 10, 13], "minim": 5, "follow": [5, 10], "singl": 5, "variabl": 5, "phi": 5, "cdot": 5, "alpha": 5, "quad": 5, "0": 5, "from": [5, 10], "scipi": 5, "import": 5, "minimize_scalar": 5, "descript": 5, "sampl": 5, "code": 5, "along": 5, "pk": 5, "paramet": 5, "objfunc": 5, "xk": 5, "start": [5, 10], "point": 5, "return": 5, "size": 5, "note": 5, "http": [5, 10], "doc": 5, "org": 5, "refer": [5, 10], "gener": [5, 10], "html": 5, "def": 5, "exact_line_search_method": 5, "subproblem1d": 5, "re": 5, "x": 5, "In": 5, "quit": 5, "expens": 5, "therefor": 5, "we": [5, 10], "us": [5, 10, 13], "some": 5, "simpl": 5, "strategi": 5, "good": 5, "lead": 5, "inexact": 5, "The": [5, 10, 13], "most": 5, "popular": 5, "one": 5, "ar": [5, 10, 13], "two": [5, 10], "inequ": 5, "satisfi": 5, "suffici": 5, "decreas": 5, "also": [5, 13], "armijo": 5, "leq": 5, "c_1": 5, "nabla": 5, "f_k": 5, "t": 5, "curvatur": 5, "geq": 5, "c_2": 5, "mai": [5, 10], "close": 5, "order": 5, "forc": 5, "steo": 5, "can": 5, "strong": 5, "onli": 5, "differ": 5, "deriv": 5, "replac": 5, "its": 5, "absolut": 5, "valu": 5, "cannot": 5, "too": 5, "posit": 5, "suppos": 5, "continu": 5, "differenti": [5, 10, 13], "let": 5, "assum": 5, "bound": 5, "below": 5, "Then": 5, "proof": 5, "omit": 5, "here": 5, "line_search": 5, "objfunc_grad": 5, "c1": 5, "c2": 5, "wolfe_line_search_method": 5, "1e": 5, "4": 5, "9": 5, "anoth": 5, "c": 5, "le": 5, "frac": 5, "2": 5, "second": 5, "first": 5, "control": 5, "being": 5, "short": 5, "comparison": 5, "disadvantag": 5, "might": 5, "exclud": 5, "all": 5, "howev": 5, "fatal": 5, "problem": 5, "long": 5, "As": 5, "conclus": 5, "have": [5, 10], "similar": 5, "compar": 5, "often": 5, "type": 5, "well": 5, "suit": 5, "maintain": 5, "definit": 5, "hessian": 5, "approxim": 5, "algorithm": 5, "describ": 5, "given": 5, "alpha_0": 5, "rho": 5, "set": 5, "while": 5, "do": 5, "end": 5, "thi": [5, 10, 13], "termin": 5, "less": 5, "appropri": 5, "conjug": 5, "websit": 10, "host": [10, 13], "cours": [10, 13], "materi": [10, 13], "math": [10, 13], "5650": [10, 13], "6650": [10, 13], "auburn": 10, "univers": 10, "emphas": 10, "both": [10, 13], "theori": [10, 13], "implement": 10, "common": 10, "method": 10, "part": [10, 13], "textbook": [10, 13], "closed_book": 10, "numer": [10, 13], "jorg": [10, 13], "noced": [10, 13], "stephen": [10, 13], "wright": [10, 13], "probabl": 10, "cover": 10, "linear": [10, 13], "program": [10, 13], "due": 10, "limit": 10, "hour": 10, "convex": 10, "lieven": 10, "vandenbergh": 10, "p": 10, "boyd": 10, "you": 10, "download": 10, "book": 10, "web": 10, "stanford": 10, "edu": 10, "cvxbook": 10, "bv_cvxbook": 10, "pdf": 10, "heavy_check_mark": 10, "equat": [10, 13], "2650": [10, 13], "topic": [10, 13], "algebra": [10, 13], "2660": [10, 13], "ani": 10, "languag": [10, 13], "python": [10, 13], "matlab": [10, 13], "julia": [10, 13], "highli": 10, "prefer": 10, "pencil2": 10, "basic": [10, 13], "exercis": 10, "evalu": 10, "consist": 10, "notebook_with_decorative_cov": 10, "report": 10, "latex": 10, "mandatori": 10, "templat": 10, "provid": 10, "microphon": 10, "present": 10, "15": 10, "minut": 10, "5": 10, "q": 10, "A": 10, "70": 10, "30": 10, "pleas": 10, "read": 10, "more": 10, "inform": 10, "about": 10, "class": [10, 13], "If": 10, "question": 10, "simpli": 10, "new": 10, "technic": 10, "tent": 10, "slack": 10, "discord": 10, "chat": 10, "messag": 10, "instead": 10, "post": 10, "announc": 10, "through": 10, "canva": 10, "repositori": 13, "nonlinear": 13, "written": 13, "2nd": 13, "edit": 13, "involv": 13, "prerequisit": 13, "default": 13, "other": 13, "script": 13, "r": 13, "support": 13}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"augment": 0, "lagrangian": 0, "method": [0, 1, 5, 7, 9, 11, 12], "week": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12], "8": 0, "9": 0, "exercis": [0, 1, 2, 5, 8, 9, 12], "conjug": 1, "gradient": [1, 5], "3": 1, "evolut": 2, "algorithm": 2, "10": 2, "classic": 2, "genet": 2, "differenti": 2, "simul": 2, "anneal": 2, "particl": 2, "swarm": 2, "extend": 3, "topic": [3, 5], "13": 3, "least": 4, "squar": 4, "problem": 4, "5": 4, "regular": 4, "line": 5, "search": 5, "1": 5, "step": 5, "length": 5, "wolf": 5, "condit": 5, "exist": 5, "goldstein": 5, "backtrack": 5, "converg": 5, "newton": [5, 9], "s": 5, "quasi": [5, 9], "stochast": 5, "descent": [5, 7], "more": 5, "momentum": 5, "nesterov": 5, "acceler": 5, "theori": 5, "program": [5, 8], "final": [6, 10], "group": [6, 10], "project": [6, 10], "present": 6, "14": 6, "mirror": 7, "proxim": 7, "12": 7, "quadrat": 8, "6": 8, "7": 8, "4": 9, "welcom": 10, "prerequisit": 10, "assign": 10, "bi": 10, "weekli": 10, "submiss": 10, "grade": 10, "discuss": 10, "subgradi": 11, "11": 11, "trust": 12, "region": 12, "2": 12, "befor": 13, "you": 13, "start": 13}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})